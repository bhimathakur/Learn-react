import {StaticRouter} from "react-router-dom/server";
import { expect, test } from "vitest";

import { render } from "@testing-library/react";
import Pet from "../Pet";

test("Display a default thumnail", async () => {
    const pet = render(
    <StaticRouter>
        <Pet images={["1.jpg", "2.jpg", "3.jpg"]} />
    </StaticRouter>
    );
    const petThumbnail = await pet.findByTestId("thumbnail")
    expect(petThumbnail.src).toContain("1.jpg");
    pet.unmount();
})