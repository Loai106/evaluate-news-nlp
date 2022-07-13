import { checkUrl } from "./nameChecker"


export const post = async (url = '', data = { url: '' }) => {
    
  const response = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  });
  
  
  try {
    const newData = await response.json();
    console.log(newData);
    return newData;
    } 
    catch (error) {
      alert('There\'s a problem ');
      console.log(error)
      return error;
    }
  };
    



const handleSubmit = async(e)=>{
    e.preventDefault();
    const inputUrl = document.getElementById('input_url').value;
    if(checkUrl(inputUrl))
    {
      const data = post('http://localhost:8080/evaluate',{url : inputUrl})
      .then(data=>
         {
                document.getElementById('agreement').innerHTML=`Agreement: ${data.agreement}`;
                document.getElementById('subjectivity').innerHTML=`Subjectivity: ${data.subjectivity}`;
                document.getElementById('confidence').innerHTML=`Confidence: ${data.confidence}`;
                document.getElementById('irony').innerHTML=`Irony: ${data.irony}`;
                document.getElementById('score_tag').innerHTML=`Score-Tag: ${data.score_tag}`;
        })
    }
    else{
      alert('Wrong URLs')
    }

    
}



export { handleSubmit }
