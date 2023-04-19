<template>
    <ion-page>
        <ion-header>
            <ion-toolbar color="primary">
                <ion-title class="ion-text-center">Página de acesso</ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content class="ion-padding">
            <ion-grid>
                <ion-row
                    class="ion-justify-content-center"
                    style="margin-top: 100px"
                >
                    <ion-col size-md="4">
                        <ion-card>
                            <ion-card-header>
                                <ion-title class="ion-text-center ion-text-blue"
                                    >Seja bem-vindo</ion-title
                                >
                            </ion-card-header>
                            <ion-item>
                                <ion-label position="floating">Email</ion-label>
                                <ion-input
                                    v-model="email"
                                    class="ion-input-outlined ion-input-md"
                                    type="email"
                                ></ion-input>
                            </ion-item>
                            <ion-item>
                                <ion-label position="floating">Senha</ion-label>
                                <ion-input
                                    v-model="senha"
                                    type="password"
                                ></ion-input>
                            </ion-item>
                            <ion-row
                                class="ion-justify-content-center margin-top"
                            >
                                <ion-col size-md="3" size="8">
                                    <ion-button
                                        @click.prevent="permissao"
                                        expand="block"
                                        color="primary"
                                        size="small"
                                        style="width: 100px; margin-top: 30px"
                                        >Entrar</ion-button
                                    >
                                </ion-col>
                            </ion-row>
                        </ion-card>
                    </ion-col>
                </ion-row>
            </ion-grid>
        </ion-content>
    </ion-page>
</template>
  
<script setup>
import router from "@/router";
import { useGlobal } from "@/stores";
import "@ionic/core/css/ionic.bundle.css";
import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonRow,
    IonCol,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
} from "@ionic/vue";
import { computed, ref } from "vue";

const store = useGlobal();
const email = ref("");
const senha = ref("");
const users = store.users;

function permissao() {
    const user = store.users.find((user) => user.email === email.value);

    if (user && user.senha === senha.value) {
        store.acessar = true;
        router.push("/lista");
    } else {
        alert("E-mail ou incorreto (Tente novamente)");
    }
}
</script>

<style scoped>
ion-content {
    --background: #f2f7ff;
}

.ion-text-blue {
    color: #05263e;
}
</style>