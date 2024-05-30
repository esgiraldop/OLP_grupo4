export async function startBuyProcess(e, accessories, usrInfo){
    // console.log("typeof(e.target.id)", typeof(e.target.id))
    // console.log("accessories ", accessories)
    // console.log("usrInfo: ", usrInfo)
    // console.log("usrInfo[0].points: ", usrInfo[0].points)
    // console.log("typeof(accessories[0].id): ", typeof(accessories[0].id))
    const accessory = accessories.find(elem => elem.id === Number(e.target.id))
    // console.log("accessory: ", accessory)

    // Validating the user has enough points
    if(usrInfo[0].points < accessory.req_points){
        alert("You do not have enough points to buy this product")
        return ""
    }else{
        const buyConf = confirm("Do you really want to buy this product?")
        if(buyConf){
            try{
                const newPoints = usrInfo[0].points - accessory.req_points
                //Updating points in the database
                const response  = await fetch(`http://localhost:4000/api/priv/users/updateUsrPoints/${usrInfo[0].id}`,
                    {
                        method: 'PATCH',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({points: newPoints})
                    })
                if(!response.ok){
                    const errorMessage  = await response.text()
                    throw new Error(`Error ${response.status}: ${errorMessage}`)
                }
                const {message, user} = await response.json()
                alert(`You have bought this product, now you have ${user.points} points.`)
                return {user, accessory}
            }catch (error) {
                console.error('Updating user points failed: ', error)
                return ""
            }

        }else{
            alert("You have NOT bought this product")
            return ""
        }
    }
}