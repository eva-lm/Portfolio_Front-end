import React from "react";
import ux1 from "../images/ux/ecoCream/ux1.png";
import ux2 from "../images/ux/ux2.png";
import ux3 from "../images/ux/fashionTrends/ux3.png";
import styleUx1 from "../images/ux/ecoCream/style/style-ux1.png";
import videoUx1 from "../images/ux/ecoCream/video/ecocream-video.mov";
import videoUx3 from "../images/ux/fashionTrends/video/fashiontrends-video.mov";

import wireframeUx1 from "../images/ux/ecoCream/wire/Wireframe_EcoCream.png";



export const projectsUx = [
        {
            "id": "0",
            "title": "EcoCream",
            "image": ux1,
               "info": [
                    {
                        "description": "EcoCream, es un proyecto personal que consiste en el diseño de una web sobre cósmetica vegana. Se basa en la venta on-line de productos que son 100% naturales y respetuosos con el medio ambiente.",
                        "video": videoUx1,
                        "wireframe": wireframeUx1,
                        "descriptionWireframe": "Boceto de wireframes de baja fidelidad para después elaborar el diseño en MarvelApp.",
                        "style": styleUx1,
                        "descriptionStyle": "Los colores usados tienen consonancia con lo natural y la cosmética, con un estilo que recuerde a la tierra y el bienstar junto con una tipografía sencilla para representar al producto."
                    } 
                ] 
        },
        {
            "id": "1",
            "title": "Unique Shine",
            "image": ux2,
               "info": [
                    {
                        "mock1": "",
                        "mock2": "",
                        //"style": "../images/style/style-ux2.jpeg",
                        "description": "Diseño de una landing page que consiste en la venta de joyas artesanas. Estilo fresco y desenfadado focalizado en público que le guste llevar complementos únicos y hechos a mano. También se trata de un proyecto personal, realizado con Adobe XD. "
                    } 
                ] 
        },
        {
            "id": "2",
            "title": "Fashion Trends",
            "image": ux3,
               "info": [
                    {
                        "description": "Diseño de una app mobile ficticia que consiste en una aplicación de moda en la que se comparten tendencias y tienes la opción de comprar las prendas que aparecen en las fotos de la gente a la que sigues, generando enlaces externos hacía la tienda.",
                        "video": videoUx3
                    } 
                ] 
        }
        ]