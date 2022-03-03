const times = {
  slowest: '1s',
  slower: '0.75s',
  slow: '0.5s',
  normal: '0.4s',
  fast: '0.25s',
  faster: '0.2s',
  fastest: '0.1s',
} as const;

interface Options {
  speed:
    | typeof times['slowest']
    | typeof times['slower']
    | typeof times['slow']
    | typeof times['normal']
    | typeof times['fast']
    | typeof times['faster']
    | typeof times['fastest'];
  type: 'string' | 'number';
  format: 's' | 'ms';
}

const timingFormat = (opts: Options) => {
  const formattedTime = opts.format === 'ms' ? parseFloat(opts.speed) * 1000 : parseFloat(opts.speed);
  return opts.type === 'number' ? (formattedTime as number) : (`${formattedTime}${opts.format}` as string);
};

export class TIMING {
  public static slowest(type?: 'string', format?: Options['format']): typeof times.slowest;
  public static slowest(type?: 'number', format?: Options['format']): number;
  public static slowest(type?: Options['type'], format?: Options['format']) {
    type = type || 'string';
    format = format || 's';
    return timingFormat({ speed: times.slowest, type, format });
  }

  public static slower(type?: 'string', format?: Options['format']): typeof times.slower;
  public static slower(type?: 'number', format?: Options['format']): number;
  public static slower(type?: Options['type'], format?: Options['format']) {
    type = type || 'string';
    format = format || 's';
    return timingFormat({ speed: times.slower, type, format });
  }

  public static slow(type?: 'string', format?: Options['format']): typeof times.slow;
  public static slow(type?: 'number', format?: Options['format']): number;
  public static slow(type?: Options['type'], format?: Options['format']) {
    type = type || 'string';
    format = format || 's';
    return timingFormat({ speed: times.slow, type, format });
  }

  public static normal(type?: 'string', format?: Options['format']): typeof times.normal;
  public static normal(type?: 'number', format?: Options['format']): number;
  public static normal(type?: Options['type'], format?: Options['format']) {
    type = type || 'string';
    format = format || 's';
    return timingFormat({ speed: times.normal, type, format });
  }

  public static fast(type?: 'string', format?: Options['format']): typeof times.fast;
  public static fast(type?: 'number', format?: Options['format']): number;
  public static fast(type?: Options['type'], format?: Options['format']) {
    type = type || 'string';
    format = format || 's';
    return timingFormat({ speed: times.fast, type, format });
  }

  public static faster(type?: 'string', format?: Options['format']): typeof times.faster;
  public static faster(type?: 'number', format?: Options['format']): number;
  public static faster(type?: Options['type'], format?: Options['format']) {
    type = type || 'string';
    format = format || 's';
    return timingFormat({ speed: times.faster, type, format });
  }

  public static fastest(type?: 'string', format?: Options['format']): typeof times.fastest;
  public static fastest(type?: 'number', format?: Options['format']): number;
  public static fastest(type?: Options['type'], format?: Options['format']) {
    type = type || 'string';
    format = format || 's';
    return timingFormat({ speed: times.fastest, type, format });
  }
}
