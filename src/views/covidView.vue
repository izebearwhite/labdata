<template>
  <div>
    <form action="">
      <div>
        <label for="">Date : </label>
        <input v-model="toDate" type="Date" />
      </div>
      <div>
        <label for="">Name-surename : </label>
        <input v-model="name" type="text" />
      </div>
      <div>
        <label for="">ATK : (Positive / Negative) </label>
        <input v-model="atk" type="text" />
      </div>
      <div>
        <label for="">Phone Number : </label>
        <input v-model="phone" type="Number" />
      </div>
      <div>
        <label for="">Email : </label>
        <input v-model="email" type="Email" />
      </div>
    </form>
    <button @click="addData()">Add Data</button>
    <br />
    <table>
      <tr>
        <th>Date</th>
        <th>Name</th>
        <th>ATK</th>
        <th>Phone</th>
        <th>Email</th>
        <th>Deleat</th>
      </tr>
      <tr v-for="(data, index) in allData" :key="index">
        <td>{{ data.data.toDate }}</td>
        <td>{{ data.data.name }}</td>
        <td>{{ data.data.atk }}</td>
        <td>{{ data.data.phone }}</td>
        <td>{{ data.data.email }}</td>
        <button @click="Del(data.id)">Deleat</button>
      </tr>
    </table>
  </div>
</template>

<script>
import { collection, addDoc, getDocs,deleteDoc,doc  } from "firebase/firestore";
import db from "../plugins/config-db";

export default {
  mounted(){
    this.readData();
  },
  data: () => ({
    toDate: "",
    name: "",
    atk: "",
    phone: "",
    email: "",
    allData: [],
  }),
  methods: {
    async Del(id){
      try {
       await deleteDoc(doc(db, "users", id));
      }catch(e){console.log(e)}
    },
    async addData() {
      try {
        const docRef = await addDoc(collection(db, "users"), {
          toDate: this.toDate,
          name: this.name,
          atk: this.atk,
          phone: this.phone,
          email: this.email,
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    },
    async readData() {
      const querySnapshot = await getDocs(collection(db, "users"));
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        this.allData.push({id: doc.id,data: doc.data() });
      });
    },
  },
};
</script>

<style>
table,
tr,
td,
th {
  border: 1px solid black;
  border-collapse: collapse;
}
th {
  background-color: yellow;
}
tr {
  background-color:  pink;
}
</style>
