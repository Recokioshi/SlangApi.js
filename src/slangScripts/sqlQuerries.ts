import { restricted } from '../slang/Slang API/restricted';
import { ArrayList } from '../slang/java.util/ArrayList';

export const runQuery = async (id: number) => {
  const params = new ArrayList();
  const query = `SELECT * FROM WOADM.TSLOT WHERE ID = ?`;
  params.add(id);
  return restricted.generalSQL(query, params);
};
