import { render, screen } from "@testing-library/react";
import Options from "../Option";

describe("the reqs for the toppings and scoops", () => {
  test("that displays the image of each scoop", async () => {
    render(<Options optionType="scoops" />);

    //find images
    const allScoopImages = await screen.findAllByRole("img", {
      name: /scoop$/i,
    });
    // dollar sign says that the string ends with the word before it

    expect(allScoopImages).toHaveLength(2);
    //confirm alt text of the images
    const altText = allScoopImages.map((item) => item.alt);
    expect(altText).toEqual(["Chocolate scoop", "Vanilla scoop"]);
  });
  test("that displays the image of each topping", async () => {
    render(<Options optionType="toppings" />);

    //find images
    const allScoopImages = await screen.findAllByRole("img", {
      name: /topping$/i,
    });
    // dollar sign says that the string ends with the word before it
    expect(allScoopImages).toHaveLength(3);
    //confirm alt text of the images
    const altText = allScoopImages.map((item) => item.alt);

    expect(altText).toEqual([
      "Cherries topping",
      "M&Ms topping",
      "Hot fudge topping",
    ]);
  });
});
