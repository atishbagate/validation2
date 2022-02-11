<template>
  <h2>this is Condition template</h2>
  <!-- step 1 -->
    <!-- <h4>v-if</h4>
    <button v-on:click = "showdata" v-bind:style = "styleobj">Click Me</button>
         <span style = "font-size:25px;"><b>{{show}}</b></span> -->
         <!-- <h1 v-if = "show">This is h1 tag</h1> -->
         <!-- <h2>This is h2 tag</h2> -->
 
    <!-- step 2  else statement (just uncomment 11 line and comment 8 line)-->
           <!-- <h2 v-else>This is h2 tag</h2> -->

    <!-- step 3 show  {just comment 11 line tag and uncomment step 3 } -->
     <!-- <div v-show = "show">
            <b>V-Show:</b>
            <img src = "https://www.goodmorningimagesforlover.com/wp-content/uploads/2018/09/ninja-hattori-all-photos.jpg" width = "100" height = "100" />
         </div> -->

    <!-- step 4 complicated -->
    <!-- <h3>list rendering -> v-for</h3>
    <input type = "text" v-on:keyup.enter = "showinputvalue"
            v-bind:style = "styleobj" placeholder = "Enter Fruits Names"/>
         <h1 v-if = "items.length>0">Display Fruits Name</h1>
         <ul>
            <li v-for = "a in items" :key="a">{{a}}</li>
         </ul> -->
    
    <!-- step 5 easy -->
    <!-- <h2 v-for="value in info" :key="value">{{value}}</h2> -->

    <!-- step 6 Accessing Index Values and Keys  -->
    <!-- <h2 v-for="(index,value,key) in info" :key="index">{{key}} {{index}} : {{value}}</h2> -->

    <!-- step 7 Accessing the objects inside the Array  -->
    <!-- <h3 v-for="name in fullNames" 
    :key="name.rank">
    {{name.fname}} {{name.lname}} {{name.rank}}
    </h3> -->
</template>

<script>
export default {
    name:"Conditions",
    data(){
        return{
            // step 1 to step 3
            //    show: true,
            //    styleobj: {
            //       backgroundColor: '#2196F3!important',
            //       cursor: 'pointer',
            //       padding: '8px 16px',
            //       verticalAlign: 'middle',
            //    }
            // step 4
            //     items:[],
            //     styleobj: {
            //       width: "30%",
            //       padding: "12px 20px",
            //       margin: "8px 0",
            //       boxSizing: "border-box"
            //    }
            // step 5 - 6 v-for 
            // info:{
            //     name:"atish",
            //     channel:"youtube",
            //     location:"latur"
            // }
            // step 7 v-for array of objects
            // fullNames:[
            //     {fname:"Atish", lname:"bagate", rank:"senior"},
            //     {fname:"Sumit", lname:"bagate", rank:"junior"}
            // ]
        }
    },
    methods:{
        // step 1 to step 3
        // showdata : function() {
        //           this.show = !this.show;
        //        }
        // step 4
        // showinputvalue : function(event) {
        //           this.items.push(event.target.value);
        //        }
   }
}
</script>

<style>

</style>