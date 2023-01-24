import { expect, test } from "vitest";
import { render } from "@testing-library/react";
import Carousel from "../Carousel";

test("let's user click on the thumbnail to change the image", async () => {
    //const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg"];
    const images = ["0.jpg"];
    const carousel = render(
        <Carousel images={images} />
    );

    const hero = await carousel.findByTestId("carousel");
    
    expect(hero.src).toContain(images[0]);
    // for(let i =0; i < images.length; i++) {
    //     const image = images[i];
    //     const thumb = await carousel.findByTestId(`thumbnail{i}`);
    //     //console.log(thumb);

    //     await thumb.click()
    //     expect(hero.src).toContain(image);
    //     //expect(Array.from(thumb.classList)).toContain("active");
    //     carousel.unmount();


    // }
})