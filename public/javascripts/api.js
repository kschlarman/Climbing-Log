var $ = require('jquery');

module.exports = {
  getTimeline: function(success) { 
    $.ajax({
      url: 'timeline',
      dataType: 'json',
      success: function(data) {
        success(data);
      },
      error: _logError 
    });
  },

  getAnalytics: function(success) {
    $.ajax({
      url: 'analytics',
      dataType: 'json',
      success: function(data) {
        success(data);
      },
      error: _logError 
    });
  },

  removeClimb: function(id) {
    $.ajax({
      url: 'climbs/' + id,
      method: 'DELETE',
      dataType: 'json',
      error: _logError 
    });
  },

  createClimb: function(climb, success) {
    $.ajax({
      url: 'climbs',
      method: 'POST',
      data: climb,
      dataType: 'json',
      success: function(data) {
        success(data);
      },
      error: _logError 
    });
  },

  getClimb: function(id, success) {
    $.ajax({
      url: 'climbs/' + id,
      dataType: 'json',
      success: function(data) {
        success(data);
      },
      error: _logError
    });
  },

  editClimb: function(id, climb, success) {
    $.ajax({
      url: 'climbs/' + id,
      method: 'PUT',
      data: climb,
      dataType: 'json',
      success: function(data) {
        success(data);
      },
      error: _logError
    });
  }
}

function _logError(xhr, status, err) {
  console.error('timeline', status, err.toString());
}
