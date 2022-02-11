<template>
  <!-- <h2>Events</h2> -->
  <!-- step basic  -->
  <br>
         <!-- <h2> Add Number 100 + 200 = {{total}}</h2>
          <button v-on:click = "displaynumbers">Click ME</button> -->

  <!-- step 1 -->
  <!-- <div v-bind:style = "styleobj" v-on:mouseover = "changebgcolor" v-on:mouseout = "originalcolor"></div> -->
    
    <!-- step 2  USING ONCE -->
    <!-- <button v-on:click.once = "buttonclickedonce" v-bind:style = "styleobj">Click Once</button>
         Output:{{clicknum}}
         <br/><br/>
         <button v-on:click = "buttonclicked"  v-bind:style = "styleobj">Click Me</button>
         Output:{{clicknum1}} -->

    <!-- step 3 -->
     <!-- <a href = "http://www.google.com" v-on:click.prevent = "clickme" target = "_blank" v-bind:style = "styleobj">Click Me</a> -->
    
    <!-- step 4  -->
     <!-- <input type = "text" v-on:keyup.enter = "showinputvalue" v-bind:style = "styleobj" placeholder = "Enter your name"/>
         <h3> {{name}}</h3> -->

 
  <!-- remaining custom Event and applying it on component -->
     <br>
     <Conditions /> 
</template>

<script>
import Conditions from './Conditions.vue'
export default {
name:"Events",
components:{
     Conditions
},
data() {       
         return{
          //     step basic 
               // num1: 100,
               // num2 : 200,
               // total : ''

                    // step 1
               // num1: 100,
               // num2 : 200,
               // total : '',
               // styleobj : {
               //    width:"100px",
               //    height:"100px",
               //    backgroundColor:"red"
               // }

            // step 2
               // clicknum : 0,
               // clicknum1 :0,
               // styleobj: {
               //    backgroundColor: '#2196F3!important',
               //    cursor: 'pointer',
               //    padding: '8px 16px',
               //    verticalAlign: 'middle',
               // }
          
          // step 4 key enter
          // name:'',
          //      styleobj: {
          //         width: "30%",
          //         padding: "12px 20px",
          //         margin: "8px 0",
          //         boxSizing: "border-box"
          //      }
         }
 },
           
methods: {
               // step basic 
               // displaynumbers : function(event) {
               //    console.log(event);
               //    return this.total =  this.num1+ this.num2;
               // },
               
                // step 1
               //  changebgcolor : function() {
               //    this.styleobj.backgroundColor = "green";
               // },
               // originalcolor : function() {
               //    this.styleobj.backgroundColor = "red";
               // },
            //    step 2
          //    buttonclickedonce : function() {
          //         this.clicknum++;
          //      },
          //      buttonclicked : function() {
          //         this.clicknum1++;
          //      },
            
            // step 3
          //   clickme : function() {
          //         alert("Anchor tag is clicked");
          //      }

          // step 4   key enter 
          // showinputvalue : function(event) {
          //         this.name=event.target.value;
          //      }
}
}
</script>

<style>

</style>