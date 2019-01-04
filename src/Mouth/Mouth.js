import React from 'react'

const Mouth = () => {
    return (

  <section id="mouth"><h2>MOUTH</h2>

    REQUIRED will remove, I personally hate contact forms 

    <p><i class="far fa-envelope"></i> Contact me <i class="fas fa-at"></i> HERE form <i class="material-icons">touch_app</i></p>
    
    <form name = "contactForm" action="#" method="post">
    
    <div>
      <label for="name">name:</label>
      <input type="text" id="name" name="user_name" required>
    </div>
    
    <div>
      <label for="mail">email:</label>
      <input type="email" id="mail" name="user_mail" required>
    </div>

    <div>
      <label for="msg">message:</label>
      <textarea id="msg" name="user_message"></textarea>
    </div>

    <div class="button" id="submit">
      <button type="submit"> SEND  </button>
    </div>
    
    </div>

    </form>
                
  </section>

  )
}

export default Mouth;