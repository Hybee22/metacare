export default (sequelize, DataTypes) => {
  const Comment = sequelize.define("Comment", {
    id: {
      allowNull: false,
      autoIncrement: true,
      unique: true,
      type: DataTypes.INTEGER,
    },
    movieId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    body: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    commentId: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    anonymous: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    ipAddress: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Comment.associate = (model) => {
    // Comment Association with other models
    //   Comment.belongsTo(model.User);
  };

  return Comment;
};
