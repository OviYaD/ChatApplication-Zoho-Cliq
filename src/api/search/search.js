import axios from "axios";
import config from "../../config";
import { users,channel,freqContact,messages } from "../../assets/mock_data";

export const getFrequentContacts = async() => {
        console.log("search result")
        const res = await axios.post(`${config.END_POINT}/search/frequent-contacts`,
        {
            "organization_id":JSON.parse(localStorage.getItem("!@#$%^org)(*&^%$")).id
        },
        {
        headers: {
            'Authorization': 'Bearer ' + (localStorage.getItem('token')) || ''
        }
    }
    );
    console.log("search result",res);
    return res.data.contacts;
//   return freqContact.contacts;
} 


export const getChannels = async(query) => {
    const res = await axios.post(`${config.END_POINT}/search/channel`,
    {
        "organization_id":JSON.parse(localStorage.getItem("!@#$%^org)(*&^%$")).id,
        query
    },
    {
    headers: {
        'Authorization': 'Bearer ' + (localStorage.getItem('token')) || ''
      }
  }
  )
  return res.data.channels;
  // return channel.channels
}

export const getUsers = async(query) => {
  const res = await axios.post(`${config.END_POINT}/search/user`,
      {
          "organization_id":JSON.parse(localStorage.getItem("!@#$%^org)(*&^%$")).id,
          query
      },
      {
      headers: {
          'Authorization': 'Bearer ' + (localStorage.getItem('token')) || ''
        }
    }
    )
    return res.data.users;
    // return users.users;
}

export const getMessages = async(query,offset=0) => {
    console.log("query.........",query);
  const res = await axios.post(`${config.END_POINT}/search/message`,
      {
          "organization_id":JSON.parse(localStorage.getItem("!@#$%^org)(*&^%$")).id,
          query,
          offset
      },
      {
      headers: {
          'Authorization': 'Bearer ' + (localStorage.getItem('token')) || ''
        }
    }
    )
    return res.data.messages;
    // return messages.messages;
}

export const multiSearch = async(query,offset=0) => {
    console.log("query.........",query);
  const res = await axios.post(`${config.END_POINT}/search/multi-search`,
      {
          "organization_id":JSON.parse(localStorage.getItem("!@#$%^org)(*&^%$")).id,
          query,
          offset
      },
      {
      headers: {
          'Authorization': 'Bearer ' + (localStorage.getItem('token')) || ''
        }
    }
    )
    console.log(res)
    return res.data;
    // return messages.messages;
}