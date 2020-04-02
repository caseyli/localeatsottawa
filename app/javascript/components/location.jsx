import React from 'react';
import CheckIcon from './check_icon';

class Location extends React.Component {
  friendlyDeliveryOptionName = (option) => {
    if (option == "pickup") {
      return "Pickup";
    }
    else if (option == "delivery") {
      return "Delivery";
    }
    else if (option == "skip_the_dishes") {
      return "Skip The Dishes";
    }
    else if (option == "uber_eats") {
      return "Uber Eats";
    }
    else if (option == "foodora") {
      return "Foodora";
    }
    else if (option == "door_dash") {
      return "Door Dash";
    }
  }
  
  deliveryOptions = () => {
    const { location } = this.props;
    return ["pickup", "delivery", "skip_the_dishes", "uber_eats", "foodora", "door_dash"].map((option) => {
      return (
        location[option] && 
        <span>
          {
            ((location[option+"_url"] == null) || (location[option+"_url"].length == 0)) ?
              this.friendlyDeliveryOptionName(option)
            :
              <a href={location[option+"_url"]}>{this.friendlyDeliveryOptionName(option)}</a>
          }
        </span>
      );
    })

    let output = '';

    if(location.pickup) {
      output += 'Pickup';
    } 
    
    if(location.delivery) {
      if(output.length > 0) {
        output += ', ';
      }
      output += 'Delivery';
    } 
    
    if(location.skip_the_dishes) {
      if(output.length > 0) {
        output += ', ';
      }
      output += 'Skip the Dishes';
    } 
    
    if(location.uber_eats) {
      if(output.length > 0) {
        output += ', ';
      }
      output += 'Uber Eats';
    } 
    
    if(location.foodora) {
      if(output.length > 0) {
        output += ', ';
      }
      output += 'Foodora'
    } 
    
    if(location.door_dash) {
      if(output.length > 0) {
        output += ', '
      }
      output += 'Doordash';
    } 

    return output;
  }

  render() {
    const { restaurantId, location } = this.props;
    return (
      <div className='component-location'>
        <div className='main-info'>
          <div className='address'>
            <i className='fas fa-map-marker-alt' />{location.address}
          </div>
          <div className='delivery-options'>
            {this.deliveryOptions()}
          </div>
        </div>
        {
          window.gon.admin &&
          <div className='location-actions'>
            <a href={`/restaurants/${restaurantId}/locations/${location.id}/edit`}>Edit</a>
            {' '}
            <a href={`/restaurants/${restaurantId}/locations/${location.id}`} 
                data-method='delete'
                data-confirm={`Are you sure you want to delete '${location.name}'?`}
            >Destroy</a>
          </div>
        }
      </div>
    );
  }
}

export default Location;