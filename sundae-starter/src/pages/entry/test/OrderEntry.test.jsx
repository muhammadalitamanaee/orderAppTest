import { render, screen, waitFor } from "@testing-library/react";
import { server } from "../../../mocks/server";
import { HttpResponse, http } from "msw";
import OrderEntry from "../OrderEntry";

describe("handle errs for scoops and toppings", () => {
  test("should first", async () => {
    server.resetHandlers([
      http.get("http://localhost:3030/scoops", async () => {
        return new HttpResponse.json(null, { status: 500 });
      }),
      http.get("http://localhost:3030/toppings", async () => {
        return new HttpResponse.json(null, { status: 500 });
      }),
    ]);
    render(<OrderEntry />);
    //in some systems (fast system you wont get the err : there is only one alert). its about race condition. so for that we use waitFor
    await waitFor(async () => {
      const alerts = await screen.findAllByRole("alert");
      // console.log(alerts)
      expect(alerts).toHaveLength(2);
    });
  });
});
