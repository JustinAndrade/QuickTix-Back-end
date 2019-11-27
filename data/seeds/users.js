
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('USERS').del()
    .then(function () {
      // Inserts seed entries
      return knex('USERS').insert([
        {
          id: 1,
          userName: 'ReactWizard',
          firstName: 'Don',
          lastName: 'The Don',
          email: 'donthedon@gmail.com',
          profileImg: 'https://ca.slack-edge.com/T4JUEB3ME-UGRE3HAUS-1a9b769cf3e3-512',
          isAdmin: true,
          isManager: true,
        },
        {
          id: 2,
          userName: 'Justin',
          firstName: 'Justin',
          lastName: 'Andrade',
          email: 'j.andrade.john@gmail.com',
          profileImg: 'https://ca.slack-edge.com/T4JUEB3ME-UDBFE44HJ-beb8a1c17908-512',
          isAdmin: true,
          isManager: true,
        },
        {
          id: 3,
          userName: 'JT',
          firstName: 'Justin',
          lastName: 'Trombley',
          email: 'jt@gmail.com',
          profileImg: 'https://ca.slack-edge.com/T4JUEB3ME-UDBFE44HJ-beb8a1c17908-512',
          isAdmin: false,
          isManager: false,
        },
      ]);
    });
};
