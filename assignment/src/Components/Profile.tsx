export const Profile=({
  Profilename,age,countryname,followercount,likescount,imagecount
})=>{
  return (

  <div className="whitespace-pre-line size-60 items-center bg-whiterounded bg-emerald-300 shadow-xl p-5">
      <img className="w-24 h-24 rounded-full mx-auto" src="https://www.creativefabrica.com/wp-content/uploads/2023/04/07/Cute-Robot-Youtube-Profile-Picture-66509840-1.png" alt="" width="384" height="512"></img>
    <div className="flex justify-center">
    <div className="text-gray-700 font-bold justify-center">
      {Profilename}
      <span className="text-gray-400 text-sm">
      {age}</span>
      <div className="flex justify-center text-gray-400 text-xs">
        {countryname}
      </div>
      <br> 
      </br>
      <hr />
      <div className="border-t-2 border-dotted border-gray-500 mt-"></div>
      <div className="flex justify-between text-xs ">
        <div>{followercount} 
        </div>    
        <div> {likescount}</div>
        <div>     {imagecount}
        </div>
      </div>
      <div className="flex justify-between text-xs">
        <div>followers
          </div>
          <div>  likes
            </div>
            <div>  images
              </div>
      </div>
      
      
        </div>
    </div>
    </div>
    );
};
