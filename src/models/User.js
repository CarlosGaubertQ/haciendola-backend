import {  DataTypes } from 'sequelize';
import { sequelize } from "../database/database.js";


export const User = sequelize.define('User', {
  Username: {
    type: DataTypes.STRING(255),
    allowNull: false,
    primaryKey: true
  },
  Password: {
    type: DataTypes.STRING(255),
    allowNull: true
  }
}, {
  tableName: 'User',
  timestamps: false
});


