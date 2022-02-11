<template>
<!-- <h3>Binding</h3> -->
         <!-- STEP 1 -->
         <!-- {{title}}<br/>
         <a href = "hreflink" target = "_blank"> Click Me </a> <br/>
         <a href = "{{hreflink}}" target = "_blank">Click Me </a>  <br/>
         <a v-bind:href = "hreflink" target = "_blank">Click Me </a>   <br/> -->

         <!-- STEP 2  passing under obj-->
          <!-- <div v-bind:class = "{active:isactive}"><b>{{title}}</b></div> -->

         <!-- STEP 3 condition inside obj multiple -->
          <!-- <div class = "info"  v-bind:class = "{ active: isActive, 'displayError': hasError }">
            {{title}}
         </div> -->
         
         <!-- step 4 using Array  multiple -->
          <!-- <div v-bind:class = "[infoclass, errorclass]">{{title}}</div> -->

          <!-- step 5  condition under Array  -->
           <!-- <div v-bind:class = "[isActive ? infoclass : '', haserror ? errorclass : '']">{{title}}</div> -->

            <!-- stylings step 6 -->
            <!-- <div :style = "styleobj">{{title}}</div> -->
            <!-- <br> -->
  <Events />
</template>
<script>
import Events from "./Events.vue"
export default{
    name:'Child',
   components:{
      Events
   },
   data(){
      return{
               // STEP 1
               // title : "DATA BINDING",
               // hreflink : "http://www.google.com"  ,

               // STEP 2 
               //  isactive : false,
  
               // STEP 3
               // isActive : true,
               // hasError : false

               // step 4
               // title : "This is class binding example",
               // infoclass : 'info',
               // errorclass : 'displayError'

               // step 5
               // title : "This is class binding example",
               // infoclass : 'info',
               // errorclass : 'displayError',
               // isActive : true,
               // haserror : true

               // step 6
               //  title : "Inline style Binding",
               // styleobj : {
               //    color: 'red',
               //    fontSize :'40px'
               // }

      }
   },
   
 }
</script>
<style scoped>
         /* // STEP 2 */
         /* .active {
            background: red;
         } */

         /* step 3 */
         /* .info {
            color: #00529B;
            background-color: #BDE5F8;
         }
         div {
            margin: 10px 0;
            padding: 12px;
         }
         .active {
            color: #4F8A10;
            background-color: #DFF2BF;
         }
         .displayError{
            color: #D8000C;
            background-color: #FFBABA;
         } */

         /* step 4 */
                  /* .info {
            color: #00529B;
            background-color: #BDE5F8;
         }
         div {
            margin: 10px 0;
            padding: 12px;
            font-size : 25px;
         }
         .active {
            color: #4F8A10;
            background-color: #DFF2BF;
         }
         .displayError{
            color: #D8000C;
            background-color: #FFBABA;
         } */

         /* step 5 */
                  /* .info {
            color: #00529B;
            background-color: #BDE5F8;
         }
         div {
            margin: 10px 0;
            padding: 12px;
            font-size : 25px;
         }
         .active {
            color: #4F8A10;
            background-color: #DFF2BF;
         }
         .displayError{
            color: #D8000C;
            background-color: #FFBABA;
         } */
</style>