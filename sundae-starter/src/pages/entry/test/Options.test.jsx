import { render, screen, waitFor } from "@testing-library/react";
import ScoopOptions from "../ScoopOption";
// import ToppingOption from "../ToppingOption";

describe("the scoop options", () => {
  test("that displays the image of each scoop", async () => {
    render(<ScoopOptions optionType="scoops" />);

    //find images
    const allScoopImages = await screen.findAllByRole("img", {
      name: /scoop$/i,
    });
    // dollar sign says that the string ends with the word before it
    console.log(allScoopImages);
    
    await waitFor(()=> expect(allScoopImages).toHaveLength(2))
    //confirm alt text of the images
    const altText = allScoopImages.map((item) => item.alt);
    expect(altText).toEqual(["Chocolate scoop", "Vanilla scoop"]);
  });
    // test("that displays the image of each topping", async () => {
    //   render(<ToppingOption optionType="toppings" />);

    //   //find images
    //   const allScoopImages = await screen.findAllByRole("img", {
    //     name: /toppping$/i,
    //   });
    //   // dollar sign says that the string ends with the word before it
    //   expect(allScoopImages).toHaveLength(6);
    //   console.log(allScoopImages);
    //   //confirm alt text of the images
    //   const altText = allScoopImages.map((item) => item.alt);
    //   expect(altText).toEqual(["Chocolate scoop", "Vanilla scoop"]);
    // });
});
