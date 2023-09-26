import Link from 'next/link'
 
interface RouteNavProps{
   category:{
       id:string
       name:string
   }
}


const RouteNav:React.FC<RouteNavProps>  = async({category}) => {

 
    
   
    

   const routes = [
       {
       label:category.name.toUpperCase(),
          href:`/stores/${category.id}`,
          active:true
            
       },
        
       
   ]

   return (
       <div className='flex gap-x-4 mx-4 items-center'>
           {routes.map((route)=>{
               return <Link key={route.href} href={route.href} className={`${route.active?"text-3xl font-bold":"font-light"}`}>{route.label}</Link>
           })}
       </div>
   )
}

export default RouteNav