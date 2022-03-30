// Emblem vault tokenIds are generated upon vault creation and are not perfectly sequential
// Due to this, blockheads not stored in vaults (only existing on Namecoin) are not included
// And tokenIds need to be added when new blockheads are vaulted and stored via Emblem Vaults
const tokenIds = [
    '19042632727111131',
    '7413895387830281',
    '3597390172434681',
    '26976514898948271',
    '89174770224909021',
    '7677499572363391',
    '21114224415090391',
    '25701674489067561',
    '51417334550169901',
    '7461882148697651',
    '4770824728579841',
];

// Emblem Vault smart contract address on the Ethereum blockchain
const assetContractAddress = '0x82c7a8f707110f5fbb16184a5933e9f78a34c6ab';

export const openSeaUrl = `https://api.opensea.io/api/v1/assets?token_ids=${tokenIds[0]}&token_ids=${tokenIds[1]}&token_ids=${tokenIds[2]}&token_ids=${tokenIds[3]}&token_ids=${tokenIds[4]}&token_ids=${tokenIds[5]}&token_ids=${tokenIds[6]}&token_ids=${tokenIds[7]}&token_ids=${tokenIds[8]}&token_ids=${tokenIds[9]}&token_ids=${tokenIds[10]}&token_ids=${tokenIds[11]}&asset_contract_address=${assetContractAddress}&order_direction=desc&offset=0&limit=50`
