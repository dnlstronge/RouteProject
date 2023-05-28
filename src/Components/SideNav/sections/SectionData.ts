export type SectionDataModel = {
    id: number,
    heading: string,
    subheadings: string[]
} []


export const SectionData: SectionDataModel = [

    {
        id: 1,
        heading: "Show more",
        subheadings: ["Examples", "Testing it good", "methods"]
    },
    {
        id: 2,
        heading: "Routing",
        subheadings: ["Datamodels", "Testing it good", "expand upon", "Use cases"]
    }
    ,
    {
        id: 3,
        heading: "Examples",
        subheadings: ["Working with Thunk", "Another Section", "Explain", "more sections", "more"]
    },
    {
        id: 4,
        heading: "Show more",
        subheadings: ["Showcasing", "MoreTests", "Methodology", "Elaborate"]
    },
]