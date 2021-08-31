import React from "react";
import ux1 from "../images/ux/ecoCream/ux1.png";
import ux2 from "../images/ux/UniqueShine/ux2.png";
import ux3 from "../images/ux/fashionTrends/ux3.png";
import styleUx1 from "../images/ux/ecoCream/style/style-ux1.png";
import videoUx1 from "../images/ux/ecoCream/video/ecocream-video.mp4";
import wireframeUx1 from "../images/ux/ecoCream/wire/Wireframe_EcoCream.png";
import videoUx3 from "../images/ux/fashionTrends/video/fashiontrends-video.mp4";

import wireframeUx2 from "../images/ux/UniqueShine/wire/Wireframe-UniqueShine.png";
import styleUx2 from "../images/ux/UniqueShine/style/style-ux2.png";
import wireflow from "../images/ux/UniqueShine/wire/wireflow.png";
import videoUx2 from "../images/ux/UniqueShine/video/UniqueShine-video.mp4";


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
                        "description": "Diseño de una landing page que consiste en la venta de joyas artesanas. Estilo fresco y desenfadado focalizado en un tipo de público que le guste llevar complementos únicos y hechos a mano. También se trata de un proyecto personal, realizado con Adobe XD.",
                        "video": videoUx2,
                        "wireframe": wireframeUx2,
                        "descriptionWireframe": "Boceto de wireframe de baja fidelidad.",
                        "style": styleUx2,
                        "descriptionStyle": "Gama de colores marrones reprsentando la artesanía en contraste con el azul para las llamadas de acción. Para los títulos se usa una tipografía de estilo escrita a mano en consonancia con el estilo de la marca.",
                        "wireflow": wireflow,
                        "descriptionWireflow": "Diseño del flujo de pantallas de la app en conjunto."
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