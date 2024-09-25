

 let links = [
    {
        
        title: "Dashboards",
        icon:" bi bi-house",
        path : '/',
     
       
        childrens: [
            {
                title: "-Default",
                icon: "-",
                path : 'dashboard/default',
                component :'Default',
             
            },
            {
                title: "-Ecommerce",
                icon: "-",
                path:'dashboard/ecommerce',
                component :'Ecommerce',
               
            },
            {
                title:  "-Crypto",
                icon: "-",
                path : 'dashboard/crypto',
                component :'Crypto',
            }
        ]
    },
    {
        title: "Widgets",
        icon: "bi-card-list",
        path:'widgets',
      
        childrens: [
            {
                title: "General",
                icon: "-",
                path : 'widgets/general',
           
            },
            {
                title: "Charts",
                icon: "-",
                path : 'widgets/charts',
              
            }
        ]
    },
    {
        title:" Page Layout",
        icon: "bi-layout-text-sidebar-reverse",
        path: "pagelayout",
        childrens: [
            {
                title: "Boxed",
                icon: "-",
                path: "pagelayout/boxed",
            },
            {
                title: "RTL",
                icon: "-",
                path: "pagelayout/rtl",
            },
            {
                title: "Dark Layout",
                icon: "-",
                path: "pagelayout/darkLayout",
            },
           
        ]
    },
    {
        title: "Project",
        icon: "bi-layout-text-sidebar-reverse",
        path:'project' ,
        childrens: [
            {
                title:"Project List",
                icon: "-",
                path: "projects/project-list",
            },
            {
                title: "Create New",
                icon: "-",
                path: "project/create-new",
            }
        ]
    },
    {
        
        title: "Dashboards",
        icon:" bi bi-house",
        path : 'doshboard',
       
        childrens: [
            {
                title: "-Default",
                icon: "-",
                path : 'doshboard/default',
            
            },
            {
                title: "-Ecommerce",
                icon: "-",
                path:'doshboard/ecommerce',
               
            },
            {
                title:  "-Crypto",
                icon: "-",
                path : 'dashboard/crypto'
             
            }
        ]
    },
    {
        title: "Widgets",
        icon: "bi-card-list",
        path:'widgets',
      
        childrens: [
            {
                title: "General",
                icon: "-",
                path : 'widgets/general',
           
            },
            {
                title: "Charts",
                icon: "-",
                path : 'widgets/charts',
              
            }
        ]
    },
    {
        title:" Page Layout",
        icon: "bi-layout-text-sidebar-reverse",
        path: "/pagelayout",
        childrens: [
            {
                title: "Boxed",
                icon: "-",
                path: "/pagelayout/boxed",
            },
            {
                title: "RTL",
                icon: "-",
                path: "/pagelayout/rtl",
            },
            {
                title: "Dark Layout",
                icon: "-",
                path: "/pagelayout/darkLayout",
            },
           
        ]
    },
   
]

 const lineChartsData = [
    {
      name: "Page A",
      sum: 4000,
     
      amt: 2400,
    },
    {
      name: "Page B",
      sum: 3000,
     
      amt: 2210,
    },
    {
      name: "Page C",
      sum: 2000,
    
      amt: 2290,
    },
    {
      name: "Page D",
      sum: 2780,
     
      amt: 2000,
    },
    {
      name: "Page E",
      sum: 1890,
     
      amt: 2181,
    },
    {
      name: "Page F",
      sum: 2390,
     
      amt: 2500,
    },
    {
      name: "Page G",
      sum: 3490,
     
      amt: 2100,
    },
  ];
  const barChartsData = [
    {
      name: "M",
      uv: 4000,
      pv: 2400,
      amt: 2400,
      percent : 0,
    },
    {
      name: "S",
      uv: 3000,
      pv: 1398,
      amt: 2210,
      percent : 33,
    },
    {
      name: "T",
      uv: 2000,
      pv: 9800,
      amt: 2290,
      percent : 66
    },
    {
      name: "W",
      uv: 2780,
      pv: 3908,
      amt: 2000,
      percent : 100
    },
    {
      name: "T",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
 
  ];
  export {lineChartsData , links,barChartsData}