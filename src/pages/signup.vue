<template>
    <div style="margin-top:150px;">
    <Form class="form-signin center" @submit="onSubmit" :validation-schema="schema">
      <img class="mb-4 center" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt=""  width="72" height="72">
 
                  <div class="form-group   col-md-6 center">
                        <label for="email">Your Email</label>
                        <Field name="email" type="email"  class="form-control" id="email" /> 
                        <ErrorMessage name="email" style="color:red"/>
                </div>
                <div class="form-group col-md-6 center ">
                    <label for="password">Password</label>
                    <Field name="password" type="password"  class="form-control" id="password" /> 
                    <ErrorMessage name="password" style="color:red"/>
                </div>
    <div class="form-group col-md-6 center mb-4">
      <button class="btn btn-lg btn-primary btn-block" >Sign in</button>
    </div>
     <Footer/>
    </Form>
    </div>

</template>
<script>
import Footer from '../components/Footer.vue';
import { Field, Form, ErrorMessage} from 'vee-validate';
import * as Yup from "yup";
  export default({
         name:"signup",
         components: {
    Field,
    Form,
    ErrorMessage,
    Footer
  },
  data(){
      return{
          file2:''
      }
  },
    methods:{
      showdata(){
          this.file2 = event.currentTarget.files[0];
          console.log(this.file2);
      }
  },
    setup(){
      const schema = Yup.object().shape({
        email: Yup.string().email().required("email address is required."),
        password: Yup.string().min(5,"minimum 5 words must enter").required("password is Required."),
    });
         function onSubmit(values) {
          console.log(JSON.stringify(values, null, 2));
          alert("logged in")
      }
            return {
      schema,
      onSubmit,
    };
    },
 });
</script>
<style scoped>
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 65%;
}
</style>
