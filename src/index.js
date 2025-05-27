import "./style.css";
import "./mediaStyles.css";

let vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
let vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
console.log('vw ',vw,' vh ',vh);

let body = document.querySelector('.body');
let lastVW = vw;
let resize_up_actioned = false;
let pageReload = false;
if(vw > 1201){
    pageReload = true;                            //so no need for another
    const txt =  document.querySelector(".textLayout");
    txt.style.marginLeft = 0;
    lastVW = vw;
}

visualViewport.onresize = () =>{
  vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
  vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
  const txt =  document.querySelector(".textLayout");
  let txtOverlay =  document.querySelector(".textOverlay_2");

 if(vw > 1201){
    pageReload = true;
    txt.style.marginLeft = 0;
    lastVW = vw;

}else{
    let margin;

    if (vw < 963) {
        margin = 20;
        txt.style.marginLeft = `${margin}px`; 
    }
    
    if((vw > 962) && (vw < 1201)) {
        console.log('vw: ',vw);
        margin = ((vw * .25) - (2 * vw *.01));
        txtOverlay.style.marginLeft = '150px';

        if( vw > 1040) {
            margin = ((vw * .2) - (2 * vw *.01));
            txtOverlay.style.marginLeft = '200px';
        }

        if(vw > 1120) {
            margin = ((vw * .15) - (2 * vw *.01));
            txtOverlay.style.marginLeft = '300px';
        }

        
        console.log('margin: ', margin);
        const txt =  document.querySelector(".textLayout");
        txt.style.marginLeft = `${margin}px`;
        lastVW = vw;

         if(resize_up_actioned){
                        resize_up_actioned = false;
        } 
    }

}

}
