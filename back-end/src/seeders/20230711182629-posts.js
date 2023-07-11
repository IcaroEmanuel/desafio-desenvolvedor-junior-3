'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Posts', [{
      id: 1,
      userId: 1,
      title: "Lorem Ipsum",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tristique libero ac bibendum tristique. Quisque pharetra, ipsum non laoreet porta, dui orci scelerisque mi, sit amet iaculis arcu ligula in justo. Nullam sed lacus ac metus vestibulum efficitur. Nam quis erat lacus. Aliquam efficitur arcu at nisi sodales, id blandit leo semper. Sed elit libero, mollis mattis fringilla nec, molestie nec orci. Donec hendrerit orci at purus sollicitudin aliquam. Mauris a facilisis tortor. Cras sollicitudin cursus enim, vel scelerisque tortor suscipit ut. Ut aliquam metus nec turpis tincidunt, ut mollis tortor vestibulum. Aenean non lacus nec lectus ultricies faucibus. In vel turpis vestibulum, volutpat lorem eget, eleifend nibh. Ut pharetra ullamcorper tristique. In eget mattis massa, tincidunt pharetra diam. Integer pulvinar libero dolor, quis varius justo maximus vitae. Nullam ac sem eget diam faucibus vulputate. Integer volutpat in massa porta tristique. Etiam aliquam iaculis erat ac consequat. Sed varius mauris vel luctus fermentum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc eu imperdiet enim, id ultrices velit. Integer malesuada arcu vestibulum purus vestibulum, viverra tristique eros tempor. Nam ullamcorper leo vel tincidunt varius. Curabitur efficitur maximus orci nec porttitor. Donec tristique dui sed sapien tempor laoreet. Phasellus ut diam orci. Sed vestibulum tempus volutpat. Phasellus faucibus massa quis lacus posuere gravida. Donec pellentesque dapibus purus sit amet aliquam. Nullam commodo lacus ex, facilisis lacinia nulla lobortis ut. Fusce scelerisque mauris ut elit cursus, non consectetur lectus cursus. Integer semper metus ac lorem iaculis fringilla. Morbi sed odio dictum, consequat nulla quis, tempus turpis. Mauris a fringilla purus, in porta nisi. Sed faucibus magna a hendrerit condimentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam vulputate dictum lacus ac pharetra. Aenean quis dolor eu magna pretium condimentum sed eu tellus. Duis eleifend condimentum ligula, vitae facilisis odio consectetur nec. Etiam nec ligula efficitur, elementum diam eget, vulputate lorem. Sed condimentum enim sed ex consectetur, at accumsan libero rhoncus. Praesent iaculis dictum lectus sit amet eleifend. Donec fringilla tellus id purus sollicitudin auctor. Fusce viverra viverra lorem ut finibus. Quisque a faucibus metus. Phasellus sapien neque, iaculis in turpis congue, ultrices tincidunt ligula. Etiam nec neque libero. Etiam consequat lectus vitae erat viverra porta in vel erat. Pellentesque mollis, odio ut imperdiet tempus, libero justo auctor risus, non posuere nibh odio sed sapien. In hac habitasse platea dictumst. Mauris vestibulum nulla gravida, vehicula massa in, sodales diam. Duis sed velit dui. Phasellus dapibus maximus massa, sed egestas nibh tincidunt ac. Integer fermentum ipsum quis nibh tincidunt, eu lacinia ex gravida. Duis maximus turpis orci, quis volutpat magna varius non. Aliquam erat volutpat. Cras pellentesque ipsum augue.",
      createdAt: new Date(),
      updatedAt: new Date(),
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};