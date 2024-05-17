import { DataTypes } from 'sequelize';
import { sequelize } from "../database/database.js";

export const Product = sequelize.define('Product', {
    Handle: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    Title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    Description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    SKU: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    Grams: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    Stock: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    Compare_Price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    Barcode: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    tableName: 'Product',
    timestamps: false
  });
  
  