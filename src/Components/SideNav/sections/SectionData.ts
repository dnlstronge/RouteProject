export type SectionDataModel = {
    id: number,
    heading: string,
    subheadings: string[]
    dispatches: string[]
} []


export const SectionData: SectionDataModel = [

    {
        id: 1,
        heading: "Projects",
        subheadings: ["GroupTask app", "Testing it good", "methods"],
        dispatches: ["setShowGroupTask"]
    },
    {
        id: 2,
        heading: "Routing",
        subheadings: ["Datamodels", "Testing it good", "expand upon", "Use cases"],
        dispatches: ["setShowGroupTask"]
    }
    ,
    {
        id: 3,
        heading: "Examples",
        subheadings: ["Working with Thunk", "Another Section", "Explain", "more sections", "more"],
        dispatches: ["setShowGroupTask"]
    },
    {
        id: 4,
        heading: "Show more",
        subheadings: ["Showcasing", "MoreTests", "Methodology", "Elaborate"],
        dispatches: ["setShowGroupTask"]
    },
]