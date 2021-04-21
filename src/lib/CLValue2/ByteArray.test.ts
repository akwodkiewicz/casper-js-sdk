import { expect } from 'chai';
import { CLByteArray } from './index';

describe('CLByteArray', () => {
  it('Should be able to return proper value by calling .value()', () => {
    const arr8 = new Uint8Array([21,31]);
    const myHash = new CLByteArray(arr8);

    expect(myHash.value()).to.be.deep.eq(arr8);
  });

  it('Should be able to return proper value by calling .clType()', () => {
    const arr8 = new Uint8Array([21,31]);
    const myHash = new CLByteArray(arr8);

    expect(myHash.clType().toString()).to.be.eq("ByteArray");
  });

  it('Should be able to return proper byte array by calling toBytes() / fromBytes()', () => {
    const expectedBytes = Uint8Array.from(Array(32).fill(42))
    const hash = new CLByteArray(expectedBytes);
    const bytes = hash.toBytes().unwrap();

    expect(bytes).to.deep.eq(expectedBytes);
    expect(CLByteArray.fromBytes(bytes).unwrap()).to.deep.eq(hash);
  });

  // it('toJson() / fromJson()', () => {
  //   const expectedBytes = Uint8Array.from(Array(32).fill(42))
  //   const hash = new CLByteArray(expectedBytes);
  //   const json = hash.toJSON();

  //   // @ts-ignore
  //   expect(CLByteArray.fromJSON(json.result.val).result.val).to.deep.eq(hash);
  // });
});


