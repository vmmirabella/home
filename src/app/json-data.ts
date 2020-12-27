export class ProjectInfo {
    public name: string;
    public type: string;
    public description: string;
    public sourceCodeLink: string;
    public avatarImage: string;
}


export const PROJECTS: ProjectInfo[] =
[
    {
        name: 'Event Tracker',
        type: 'Android',
        description: 'Android appliction that allows users to track events in Toronto based on information event information from a '
                    + 'government website. Users can also add their own custom events to be tracked',
        sourceCodeLink: 'https://github.com/vmmirabella/projects/tree/master/EventTracker',
        avatarImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Android_robot.svg/872px-Android_robot.svg.png'
    },
    {
        name: 'Crazy Eights',
        type: 'Java',
        description: 'Crazy Eights card game made with design patterns: Abstract Factory, Factory Method, Strategy and Template made with Java',
        sourceCodeLink: 'https://github.com/vmmirabella/projects/tree/master/Crazy%20Eights%20(Java)',
        avatarImage: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/1200px-Java_programming_language_logo.svg.png'
    },
    {
        name: 'Cards of Magic',
        type: 'Godot',
        description: 'Turn-based game done through the Godot engine(Unfinished)',
        sourceCodeLink: 'https://github.com/vmmirabella/projects/tree/master/Cards%20of%20Magic',
        avatarImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Godot_icon.svg/1200px-Godot_icon.svg.png'
    },
    {
        name: 'Invoice Management',
        type: 'Laravel',
        description: 'User can Add/edit/remove invoices, services and clients (Invoices can only be removed or edited before they are sent to clients).'
                     + 'User can also generate annual, monthly and client-focused reports. ',
        sourceCodeLink: 'https://github.com/vmmirabella/projects/tree/master/Invoice%20Management',
        avatarImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png'
    },
    {
        name: 'Unity Prototypes',
        type: 'Unity',
        description: 'Focused code snippets to either test a particular idea and/or provide a basis for use elsewhere',
        sourceCodeLink: 'https://github.com/vmmirabella/projects/tree/master/Unity%20Prototypes',
        avatarImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Unity_Technologies_logo.svg/1024px-Unity_Technologies_logo.svg.png'
    },
];
