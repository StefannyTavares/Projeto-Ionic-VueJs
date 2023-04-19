<template>
    <div>
        <ion-grid>
            <ion-row v-if="acessarLista" style="margin-top: 100px">
                <ion-col size="6" offset="3">
                    <ion-card>
                        <ion-list>
                            <ion-item
                                v-for="user in store.users"
                                :key="user.id"
                                @click="showMessage(user)"
                            >
                                <ion-label>{{ user.nome }}</ion-label>
                                <ion-label>{{ user.email }}</ion-label>
                                <ion-label>{{ user.telefone }}</ion-label>
                                <ion-badge color="success" slot="end">
                                    Status: Ativo✔️
                                </ion-badge>
                            </ion-item>
                        </ion-list>
                    </ion-card>
                </ion-col>
            </ion-row>
        </ion-grid>
        <ion-badge color="primary" style="display: block; margin-top: 20px;">
      Obrigado por realizar o seu cadastro, ficamos muito felizes com a sua participação!😊
    </ion-badge>
    </div>
</template>

<script setup>
import { computed, ref } from "vue";
import {
    IonButton,
    IonCol,
    IonRow,
    IonList,
    IonItem,
    IonLabel,
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonAvatar,
    IonConten,
    IonListHeader,
    IonToast,
    toastController,
} from "@ionic/vue";
import { useGlobal } from "@/stores";
import router from "@/router";
import { Toast } from "@capacitor/toast";

const store = useGlobal();

const acessarLista = computed(() => store.acessar);

async function showMessage(user) {
    const toast = await toastController.create({
        message: `O cadastro selecionado tem o nome: ${user.nome} e o
        telefone: ${user.telefone}`,
        duration: 5000,
    });
    toast.present();
}
</script>

<style scoped>
ion-list ion-item:hover {
    background-color: #f4f4f4;
    cursor: pointer;
}

ion-list {
    --background: #e6f2ff;
}
</style>