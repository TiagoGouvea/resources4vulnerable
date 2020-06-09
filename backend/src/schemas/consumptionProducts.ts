import { Sequelize, Model, DataTypes, BuildOptions, ModelCtor } from 'sequelize';

// Simple item type
export interface ConsumptionProducts {
  readonly id?: number | string;
  productsId: number | string;
  consumptionsId: number | string;
  amount: number;
  createdAt?: number | Date | null;
  updatedAt?: number | Date | null;
  deletedAt?: number | Date | null;
}
// Sequelize returns type
export type SequelizeConsumptionProducts = ConsumptionProducts & Model;
// Sequelize model type
export type SequelizeConsumptionProductsModel = typeof Model & {
  new (values?: object, options?: BuildOptions): SequelizeConsumptionProducts;
  associate: (models: { [key: string]: ModelCtor<Model> }) => void;
};

/**
 * Sequelize attributes for this table
 */
export const attributes = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  productsId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Products',
      id: 'id'
    },
    allowNull: false
  },
  consumptionsId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Consumptions',
      id: 'id'
    },
    allowNull: false
  },
  amount: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
};

const tableName = 'ConsumptionProducts';

/**
 * Sequelize model initializer function
 * @param sequelize - Sequelize instance
 * @returns Schema - Sequelize model
 */
export const initConsumptionProductsSchema = (sequelize: Sequelize): SequelizeConsumptionProductsModel => {
  const Schema = sequelize.define(tableName, attributes, { timestamps: true }) as SequelizeConsumptionProductsModel;

  Schema.associate = (models): void => {
    // Sequelize relations
    Schema.belongsTo(models.products, {
      foreignKey: 'productsId',
      as: 'products'
    });
    //
    Schema.belongsTo(models.consumptions, {
      foreignKey: 'consumptionsId',
      as: 'consumptions'
    });
  };

  return Schema;
};
