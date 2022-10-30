import { changeRelativeValueToRealValue } from "utils/clamp";
import { convertCartesianToScreenPoint } from "../../utils/cartesian";
import { Vector2 } from "../../utils/math/Vector2";
import { Rotator2D } from "../../utils/rotator2d";
import { Continent } from "./Continent";
import { ContinentSamples } from "./Continents/Examples";
import { Spaceship } from "./Spaceship";

export class Planet {
  name: string;
  canvas: HTMLCanvasElement;
  rotator: Rotator2D;
  radius: number;
  position: Vector2;
  speed: number;
  distanceFromSun: number;
  spaceShips: Array<Spaceship>;
  continents: Array<Continent>;
  continentOrigins: Array<Vector2>;
  ctx: CanvasRenderingContext2D;
  price: number;
  support: Array<number>;
  resistance: Array<number>;
  greenness: number | null = null;
  constructor(
    canvas: HTMLCanvasElement,
    distanceFromSun: number,
    speed: number,
    radius: number,
    name: string,
    price: number,
    support: Array<number>,
    resistance: Array<number>
  ) {
    this.name = name;
    this.canvas = canvas;
    this.speed = speed;
    this.rotator = new Rotator2D(Math.random() * 360);
    this.distanceFromSun = distanceFromSun;
    this.radius = radius;
    this.spaceShips = [];
    this.ctx = this.canvas.getContext("2d")!;
    this.price = price;
    this.resistance = resistance;
    this.support = support;
    const positionAffineVector = new Vector2(distanceFromSun, 0).toAffine(true);
    const rotateAffineMatrix = this.rotator.getRotateAffineMatrix();
    const shuffledContinents = ContinentSamples.sort(() => 0.5 - Math.random());
    const selectedContinents = shuffledContinents.slice(0, 5);
    this.continents = selectedContinents.map((continent) => {
      return new Continent(this.canvas, continent, 20);
    });
    this.position = rotateAffineMatrix
      .multiplyVector(positionAffineVector)
      .toVector2();
    this.continentOrigins = [
      new Vector2(0, -this.radius),
      new Vector2(0, this.radius),
    ];
    console.log(support, resistance, this.name);
    if (support.length === 0 && resistance.length === 0) {
      this.greenness = 0;
    } else if (support.length === 0 && resistance.length !== 0) {
      this.greenness = 30;
    } else if (resistance.length === 0 && support.length !== 0) {
      this.greenness = 255;
    } else {
      console.log(
        support[support.length - 1],
        price,
        resistance[resistance.length - 1],
        this.name
      );
      let finalSupportPrice = support[support.length - 1];
      let finalResistancePrice = resistance[resistance.length - 1];
      while (price > finalResistancePrice && resistance.length > 0) {
        resistance.pop();
        finalResistancePrice = resistance[resistance.length - 1];
      }
      while (price < finalSupportPrice && support.length > 0) {
        support.pop();
        finalSupportPrice = support[support.length - 1];
      }
      if (resistance.length === 0) {
        this.greenness = 255;
      }
      if (support.length === 0) {
        this.greenness = 10;
      }

      if (support.length !== 0 && resistance.length !== 0) {
        this.greenness = changeRelativeValueToRealValue(
          price,
          finalSupportPrice,
          finalResistancePrice,

          10,
          255
        );
      }
      console.log(this.greenness, "greenness!!");
    }
    const leftOriginCount =
      this.continents.length - this.continentOrigins.length;
    for (let i = 0; i < leftOriginCount; i++) {
      const angle = (Math.PI * 2) / leftOriginCount;
      const origin = new Vector2(
        Math.cos(angle * i),
        Math.sin(angle * i)
      ).scalarBy(Math.random() * this.radius);
      this.continentOrigins.push(origin);
    }
  }

  drawContinents(origin: Vector2) {
    for (const continentOrigin of this.continentOrigins) {
      const continent = this.continents.shift()!;
      this.ctx.save();
      this.ctx.arc(origin.x, origin.y, this.radius, 0, 2 * Math.PI, false);
      this.ctx.clip();
      continent.draw(origin.add(continentOrigin), {
        r: this.greenness ? 255 - this.greenness : 0,
        g: this.greenness ?? 0,
        b: 0,
        a: 1,
      });
      this.ctx.restore();
      this.continents.push(continent);
    }
    // const northPoleContinent = this.continents[0];
    // const southPoleContinent = this.continents[1];
    // northPoleContinent.draw(origin.subtract(new Vector2(0, this.radius)), {
    //   r: 255,
    //   g: 0,
    //   b: 255,
    //   a: 1,
    // });
    // southPoleContinent.draw(origin.add(new Vector2(0, this.radius)), {
    //   r: 255,
    //   g: 0,
    //   b: 255,
    //   a: 1,
    // });
    // for (let i = 2; i < this.continents.length; i++) {
    //   const continent = this.continents[i];
    //   continent.draw(origin, {
    //     r: 255,
    //     g: 0,
    //     b: 255,
    //     a: 1,
    //   });
    // }
  }

  draw() {
    this.rotator.degree += this.speed;
    const positionAffineVector = new Vector2(this.distanceFromSun, 0).toAffine(
      true
    );
    const rotateAffineMatrix = this.rotator.getRotateAffineMatrix();
    this.position = rotateAffineMatrix
      .multiplyVector(positionAffineVector)
      .toVector2();
    const drawPosition = convertCartesianToScreenPoint(
      this.canvas,
      this.position
    );

    this.ctx.save();
    this.ctx.beginPath();
    this.ctx.arc(
      drawPosition.x,
      drawPosition.y,
      this.radius,
      0,
      2 * Math.PI,
      false
    );
    this.ctx.fillStyle = `rgba(${
      this.greenness ? 255 - this.greenness : 0
    }, ${0}, ${this.greenness ?? 0}, ${1})`;
    this.ctx.fill();

    this.ctx.textAlign = "center";
    this.ctx.textBaseline = "middle";
    this.ctx.fillStyle = "white";
    this.ctx.fillText(
      this.name,
      drawPosition.x,
      drawPosition.y + this.radius + 15
    );
    this.ctx.closePath();
    this.ctx.restore();

    this.drawContinents(drawPosition);
  }
}
