import React from 'react';
import { connect } from 'react-redux';

function Detail({ selectedCard }) {

  return (
    <div>
      <h1>Details for:</h1>
      
        <div>
          <h1>{selectedCard.id}</h1>
          <p>{selectedCard.email}</p>
          <p>{selectedCard.first_name}</p>
          <p>{selectedCard.last_name}</p>   
          <img src={selectedCard.avatar} alt="Avatar" />        
        </div>
  
    </div>
  );
}

const mapStateToProps = (state) => ({
  selectedCard: state.users.selectedCard, // Accede al estado de Redux y obtén selectedCard
});

export default connect(mapStateToProps)(Detail);
