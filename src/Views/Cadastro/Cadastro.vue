<template>
    <ion-page>
        <ion-row>
            <ion-col size="2" offset="5" style="margin-top: 200px">
                <ion-button
                    ion-activatable
                    ion-ripple-effect
                    @click="showAlert"
                    expand="block"
                >
                    Informe seus dados
                </ion-button>

                <ion-alert
                    header="Seja bem-vindo à página de cadastro.!"
                ></ion-alert>
            </ion-col>
        </ion-row>
    </ion-page>
</template>
  
<script setup>
import router from "@/router";
import { useGlobal } from "@/stores";
import {
    IonRow,
    IonCol,
    IonButton,
    IonPage,
    IonAlert,
    AlertButton,
    AlertInput,
    alertController,
} from "@ionic/vue";
import { ref } from "vue";

const store = useGlobal();

async function showAlert() {
  const alert = await alertController.create({
    header: "CADASTRAR",
    inputs: [
      { name: "nome", type: "nome", placeholder: "Nome", cssClass: "input-custom",  class: "ion-text-center"  },
      { name: "email", type: "email", placeholder: "Email", cssClass: "input-custom",  class: "ion-text-center" },
      { name: "senha", type: "senha", placeholder: "Senha", cssClass: "input-custom",  class: "ion-text-center"  },
      { name: "telefone", type: "telefone", placeholder: "Telefone", cssClass: "input-custom",  class: "ion-text-center"  },
    ],
    buttons: [
      { text: "Cancelar", role: "cancel", cssClass: "btn-cancelar" },
      { text: "Enviar", cssClass: "btn-enviar", handler: (data) => {
        store.users.push({
          id: store.users.length + 1,
          nome: data.nome,
          email: data.email,
          senha: data.senha,
          telefone: data.telefone,
        });
        console.log(store.users);
        router.push("/login");
      }},
    ],
  });
  await alert.present();
}
</script>

<style scoped>
.input-custom {
  border-radius: 10px;
  border-color: #f2f2f2;
  background-color: #f8f8f8;
  font-size: 16px;
  padding: 8px;
}

.btn-cancelar {
  color: #333333;
}

.btn-enviar {
  background-color: #3880ff;
  color: #ffffff;
}

</style>
  