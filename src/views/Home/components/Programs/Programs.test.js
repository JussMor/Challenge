import { render, screen } from "@testing-library/react";
import Programs from "./Programs";

it("Programs renders without crashing", () => {
  render(<Programs />);
});


const provenance = [
    { id: 1, list: "Legend of the origin of coffee." },
    { id: 2, list: "- Chronicle of the spread of the coffee tree" },
    { id: 3, list: "- What is coffee?" },
    { id: 4, list: "- The structure of the coffee berry" },
    { id: 5, list: "- Arabica and Robusta" },
    { id: 6, list: "- Coffee Belt land" },
    { id: 7, list: "- Fruiting coffee tree" },
    { id: 8, list: "- Seven steps of the coffee plantation to the consumer" },
    { id: 9, list: "- Breeding and hybridization of coffee tree" },
  ]


it("Programs contains the rigth content", () => {
    render(<Programs />);
    const programs = screen.getByTestId('programs');
    for(let i = 0; i < provenance.length; i++){
        expect(programs).toHaveTextContent(provenance[i].list);
    }
}
);


