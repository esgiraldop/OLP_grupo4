export async function navbarDataGenerator (){
    const usrId = localStorage.getItem('userId')
    const token = localStorage.getItem('token')

    if (!usrId || !token) {
        return { error: "Missing user ID or token" };
    }

    try{
        const response = await fetch(`http://localhost:4000/api/priv/store/usrinfo/${usrId}`,
        {
                headers: {
                  'Authorization': `Bearer ${token}`
                }
            }
        )
        if(!response.ok){
            throw new Error("Bad response")
        }
        const usrInfo = await response.json()
        // console.log("usrInfo: ", usrInfo)
        // console.log("usrInfo.username: ", usrInfo.username)
        return {user: usrInfo[0].username, userImage: usrInfo[0].avatar_img}
    }catch (err){
        console.error("Error fetching user info:", err);
        return { error: "Failed to fetch user info" };
    }
}