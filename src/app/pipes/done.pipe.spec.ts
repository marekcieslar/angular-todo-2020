import { DonePipe } from './done.pipe';

describe('DonePipe', () => {
  let pipe: DonePipe;

  beforeEach(() => {
    pipe = new DonePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return "done_outline" when true', () => {
    expect(pipe.transform(true)).toEqual('done_outline');
  });

  it('should return "trip_origin" when false', () => {
    expect(pipe.transform(false)).toEqual('trip_origin');
  });
});
