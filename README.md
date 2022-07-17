1.For better User Experience I think it would be better to make a map of room where these workstations located. Display workstations as squares and make color of these squares depending on availability. After clicking on square(workstation) show all information about this workstation.
4.I assume that it would be better if we make it GET request for getting schedule, example get(https://api.com/schedule?id=1)
5.post(https://api.com/reserve, {user: 'email@mail.com', workstatinId: '1', period: {start: 'Mon', end: 'Fri'}})
6.Array - we need to store workstations list, object - workstation data, string - for specific fields of workstation
7.For MVP I think that these information will be enough:
7.1. Reserving process of workstation by user: payment method,
7.2. Registration process: ways of registration - if it is only with email and password or it includes other methods too
