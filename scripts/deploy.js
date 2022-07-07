async function main() {
  const Collection = await ethers.getContractFactory('Collection');
  const collection = await Collection.deploy();
  await collection.deployed();
  console.log('Contract deployed to address:', collection.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

// 0xE3F0D47747952Cb39C356A4751a16DEAe5d52836
