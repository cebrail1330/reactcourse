import {PanelMenu} from "primereact/panelmenu";


const PanelMenuDemo = () => {
    const items = [
        {
            label:'File',
            icon:'pi pi-fw pi-file',
            items:[
                {
                    label:'New',
                    icon:'pi pi-fw pi-plus',
                    items:[
                        {
                            label:'Bookmark',
                            icon:'pi pi-fw pi-bookmark'
                        },
                        {
                            label:'Video',
                            icon:'pi pi-fw pi-video'
                        }
                    ]
                },
                {
                    label:'Delete',
                    icon:'pi pi-fw pi-trash'
                },
                {
                    label:'Export',
                    icon:'pi pi-fw pi-external-link'
                }
            ]
        }
    ];

    return (
        <div>
            <div className="card">
                <PanelMenu model={items} style={{ width: '22rem' }}/>
            </div>
        </div>
    );
}



