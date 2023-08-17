function updateProfile(user, updates) {
    const updatedUser = Object.assign({}, user, updates);
    return updatedUser;
  }
  
  function freezeProfile(user) {
    const frozenUser = Object.freeze(user);
    return frozenUser;
  }
  