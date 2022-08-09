 import './../cssfiles/register.css';
function Card(){
    return(<>
     

<div class="card searchs mt-3" style={{width: 18 +"rem"}}>



<a  data-toggle="modal" data-target="#exampleModalCenter">
<img src={require('./../assets/images/small/small-1.jpg')} style={{width:288,height:164}}/>
</a>


<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <iframe  src="https://www.youtube.com/embed/5oH9Nr3bKfw"  style={{width:470,height:317}}> 
              </iframe>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-dismiss="modal">Like</button>
        <button type="button" class="btn btn-danger">Share</button>
      </div>
    </div>
  </div>
</div>

  <div class="card-body cd">
    <h5 class="card-title">Card title</h5>
   
    
  </div>
</div>

                            </>)
}
export default Card;