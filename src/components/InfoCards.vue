<template>
    <!-- <div class="custom_card d-md-flex justify-content-around"> -->
    <div class="card-deck">
        <div class="card shadow bg-white rounded" style=" width:20rem;">
                <img class="  img-fluid rounded d-block  float-right" src="https://media.wired.com/photos/5d09594a62bcb0c9752779d9/125:94/w_1994,h_1500,c_limit/Transpo_G70_TA-518126.jpg" 
                   alt="Card image cap" >
            <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>

                    <a href="#" class="btn btn-primary btn-md active" role="button" aria-pressed="true">View Details</a>
                    <a href="#" class="btn btn-secondary btn-md active" style="margin-left:10px" role="button" aria-pressed="true">Brochure</a>
            </div>
        </div>
        <div class="card shadow  bg-white rounded" style="width: 20rem;">
                <img class="  img-fluid rounded  d-block  float-right" src="https://images.unsplash.com/photo-1612468008274-9445bd56161e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29vbCUyMGNhcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" 
                   alt="Card image cap" >
            <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    
                    <a href="#" class="btn btn-primary btn-md active" role="button" aria-pressed="true">View Details</a>
                    <a href="#" class="btn btn-secondary btn-md active" style="margin-left:10px" role="button" aria-pressed="true">Brochure</a>
            </div>
        </div>
        <div class="card shadow  bg-white rounded" style="width: 20rem;">
                <img class="  img-fluid rounded  d-block  float-right" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/carbon-fiber-shelby-mustang-1600685276.jpg?crop=0.9988636363636364xw:1xh;center,top&resize=480:*" 
                   alt="Card image cap" >
            <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                   
                    <a href="#" class="btn btn-primary btn-md active" role="button" aria-pressed="true">View Details</a>
                    <a href="#" class="btn btn-secondary btn-md active" style="margin-left:10px" role="button" aria-pressed="true">Brochure</a>         
            </div>
        </div>
    </div>

</template>
<script>
export default {
    name:'InfoCards'
}
</script>
<style scoped>
 
    @media only screen and (max-width: 730px) {
          .card{
           display: contents;
          }  
}
</style> 