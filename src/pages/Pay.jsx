export default function Pay() {

  const link = "https://square.link/u/YOUR_LINK"

  return (

    <div>

      <h2>pay now</h2>

      <a href={link} target="_blank" rel="noopener noreferrer">

        <img
          alt="payment QR code"
          src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${link}`}
        />

      </a>

    </div>

  )

}
