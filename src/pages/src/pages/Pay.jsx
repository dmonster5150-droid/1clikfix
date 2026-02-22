export default function Pay(){

const link="https://square.link/u/YOUR_LINK"

return(

<div>

<h2>pay now</h2>

<a href={link}>

<img
src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${link}`}
/>

</a>

</div>

)

}
