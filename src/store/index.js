import { createFunctionExpression } from '@vue/compiler-core';
import { RouterLink, RouterView } from 'vue-router'
import { createStore } from 'vuex'

export default createStore({
  state: {
    cafe:9,
    chocolate:10,
    vainilla:5,
    napolitano:2,
    flor:5,
    estrella:10,
    confetti:7,
    nombreV:'text',
    numeroV:'text',
    correoV:'text',
    descripV:'text',
  },
  getters: {
    nombre(state){
      console.log(state.nombreV);
      return state.nombreV;
    },
    numero(state){
      console.log(state.numeroV);
      return state.numeroV;
    },
    correo(state){
      console.log(state.correoV);
      return state.correoV;
    },
    descrip(state){
      console.log(state.descripV);
      return state.descripV;
    },
    cafe(state){
      console.log(state.cafe);
      return state.cafe;
    },
    chocolate(state){
      console.log(state.chocolate);
      return state.chocolate;
    },
    vainilla(state){
      console.log(state.vainilla);
      return state.vainilla;
    },
    napolitano(state){
      console.log(state.napolitano);
      return state.napolitano;
    },
    flor(state){
      console.log(state.flor);
      return state.flor;
    },
    estrella(state){
      console.log(state.estrella);
      return state.estrella;
    },
    confetti(state){
      console.log(state.confetti);
      return state.confetti;
    }
  },
  mutations: {
    SaboresCond(state){
      const CafeInput = document.querySelector("#sabor1");
      const ChocoInput=document.querySelector('#sabor2');
      const VaiInput=document.querySelector('#sabor3');
      const NapoInput=document.querySelector('#sabor4');
      //let CafeRes = CafeInput.;
      //console.log(CafeInput.checked);
      //console.log(ChocoInput.checked);
      //console.log(VaiInput.checked);
      //console.log(NapoInput.checked);
      let res;
      let ChocoRes;
      let VaiRes;
      let NapoRes;
      
      if(CafeInput.checked){
        console.log("Hay un cafe menos");
        //cafeque=state.cafe;

        res=state.cafe--;
        console.log(res);
        //const CafeCambio=document.getElementById('prueba');
        //CafeCambio.textContent=res;
      }

      if(ChocoInput.checked){
        console.log("Hay un chocolate menos");
        ChocoRes=state.chocolate--;
        console.log(ChocoRes);
      }

      if(VaiInput.checked){
        console.log("Hay una vainilla menos");
        VaiRes=state.vainilla--;
        console.log(VaiRes);
      }

      if(NapoInput.checked){
        console.log("Hay un napolitano menos");
        NapoRes=state.napolitano--;
        console.log(NapoRes);
      }
      //document.write("cafe restante es "+res);
    },

    AdornosCond(state){
      const florInput=document.querySelector('#ador1');
      const estreInput=document.querySelector('#ador2');
      const confInput=document.querySelector('#ador3');

      //console.log(florInput.checked);
      //console.log(estreInput.checked);
      //console.log(confInput.checked);

      let florRes;
      let estreRes;
      let confRes;

      if(florInput.checked){
        console.log("Hay una flor menos");
        florRes=state.flor--;
        console.log(florRes);
      }

      if(estreInput.checked){
        console.log("Hay una estrella menos");
        estreRes=state.estrella--;
        console.log(estreRes);
      }

      if(confInput.checked){
        console.log("Hay un confetti menos");
        confRes=state.confetti--;
        console.log(confRes);
      }
    },

    ClienteCond(state){
      const nombre=document.getElementById("nombre");
      const numero=document.getElementById("numero");
      const correo=document.getElementById("correo");
      const descrip=document.getElementById("des");

      state.nombreV = nombre.value;
      state.numeroV=numero.value;
      state.correoV=correo.value;
      state.descripV=descrip.value;

      console.log(state.nombreV);
      console.log(state.numeroV);
      console.log(state.correoV);
      console.log(state.descripV);

      /*var iframeDocument = document.getElementById('iframePastelero').contentDocument;
 
      // usando el método getElementById de ese objeto accedemos a 'MyDiv'
      const miDiv = iframeDocument.getElementById('cliente0');
      console.log(miDiv.textContent);
      miDiv.textContent=nombreV;*/
    },
  },
  actions: {
    pedido({commit}){
      commit("SaboresCond");
      commit("AdornosCond");
      commit("ClienteCond");
    }
  },
  modules: {
  }
})
